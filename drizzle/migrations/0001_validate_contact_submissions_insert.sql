DROP POLICY IF EXISTS "Anyone can submit a contact inquiry" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a valid contact inquiry" ON public.contact_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  category IN ('Academic / Capstone Inquiry','Technology & Licensing Discussion','Aesthetic Provider Feedback','General Information')
  AND char_length(btrim(name)) BETWEEN 1 AND 100
  AND char_length(email) <= 150
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (organization IS NULL OR char_length(organization) <= 150)
  AND char_length(btrim(message)) BETWEEN 10 AND 2000
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;