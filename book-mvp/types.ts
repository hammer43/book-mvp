export interface Prompt {
  id: string;
  title: string;
  content: string;
  llm_model?: string;
  last_used?: string;
  tags?: string[];
}
