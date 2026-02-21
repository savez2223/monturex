import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setUploaded(false);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a PDF file only.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    try {
      const fileName = `${Date.now()}_${file.name}`;
      
      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("client-uploads")
        .upload(fileName, file, { contentType: "application/pdf" });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("client-uploads")
        .getPublicUrl(fileName);

      // Send email notification via edge function
      const { error: fnError } = await supabase.functions.invoke("send-upload-email", {
        body: { fileName: file.name, fileUrl: urlData.publicUrl, storagePath: fileName },
      });

      if (fnError) throw fnError;

      setUploaded(true);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
      toast({
        title: "Upload Successful!",
        description: "Your PDF has been uploaded and sent to our team.",
      });
    } catch (err: any) {
      console.error("Upload error:", err);
      toast({
        title: "Upload Failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upload Your PDF</h2>
          <p className="text-muted-foreground text-lg">
            Upload your document and it will be sent directly to our team for review.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {/* Drop Zone */}
          <label
            htmlFor="pdf-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-primary/30 rounded-xl p-10 cursor-pointer hover:border-primary/60 transition-colors bg-muted/20"
          >
            <Upload className="w-12 h-12 text-primary mb-4" />
            <span className="text-lg font-semibold mb-1">Click to select PDF</span>
            <span className="text-sm text-muted-foreground">Only PDF files are accepted</span>
            <input
              id="pdf-upload"
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {/* Selected File */}
          {file && (
            <div className="mt-6 flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <FileText className="w-8 h-8 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}

          {/* Upload Button */}
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="mt-6 w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {uploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Uploading...
              </>
            ) : uploaded ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Uploaded Successfully!
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                Upload & Send
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
