
-- Create storage bucket for client uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('client-uploads', 'client-uploads', false);

-- Allow anyone to upload to client-uploads bucket
CREATE POLICY "Anyone can upload files" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'client-uploads');

-- Allow anyone to read files from client-uploads bucket  
CREATE POLICY "Anyone can read files" ON storage.objects FOR SELECT USING (bucket_id = 'client-uploads');
