/*
  # Create orcamentos (budget requests) table

  1. New Tables
    - `orcamentos`
      - `id` (uuid, primary key, auto-generated)
      - `nome` (text) - client name
      - `email` (text) - client email
      - `telefone` (text) - client phone number
      - `servico` (text) - service type requested
      - `descricao` (text) - project description
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `orcamentos` table
    - Allow public INSERT so anyone can submit a budget request
    - Allow authenticated users to SELECT all records (admin access)
*/

CREATE TABLE IF NOT EXISTS orcamentos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text NOT NULL DEFAULT '',
  servico text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orcamentos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a budget request"
  ON orcamentos FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all budget requests"
  ON orcamentos FOR SELECT
  TO authenticated
  USING (true);
