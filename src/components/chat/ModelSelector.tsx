import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ModelSelectorProps {
  onModelChange?: (model: string) => void;
}

const models = {
  gemini: [
    { value: "gemini-2.5", label: "Gemini 2.5" },
    { value: "gemini-3-pro", label: "Gemini 3 Pro" },
    { value: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (Preview)" },
    { value: "gemini-free", label: "Gemini Free (Testing)" },
  ],
  openai: [
    { value: "gpt-4", label: "GPT-4" },
    { value: "gpt-o3", label: "GPT-o3" },
    { value: "gpt-5.1-codex-max", label: "GPT-5.1-Codex-Max" },
    { value: "gpt-5-thinking-mini", label: "GPT-5 Thinking mini" },
    { value: "gpt-5.2-thinking", label: "GPT-5.2 Thinking" },
  ],
  anthropic: [
    { value: "claude-sonnet-4.5", label: "Claude Sonnet 4.5" },
    { value: "claude-sonnet-4.6", label: "Claude Sonnet 4.6" },
    { value: "claude-opus-4.5", label: "Claude Opus 4.5" },
    { value: "claude-opus-4.6", label: "Claude Opus 4.6" },
    { value: "claude-haiku-4.5", label: "Claude Haiku 4.5" },
  ],
};

const ModelSelector = ({ onModelChange }: ModelSelectorProps) => {
  const [selectedModel, setSelectedModel] = useState("gpt-4");

  const handleModelChange = (value: string) => {
    setSelectedModel(value);
    if (onModelChange) {
      onModelChange(value);
    }
  };

  return (
    <Select value={selectedModel} onValueChange={handleModelChange}>
      <SelectTrigger className="w-full sm:w-[220px] h-9 text-xs sm:text-sm border-border rounded-lg">
        <SelectValue placeholder="Select AI Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Google Gemini</SelectLabel>
          {models.gemini.map((model) => (
            <SelectItem key={model.value} value={model.value} className="text-xs sm:text-sm">
              {model.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>OpenAI</SelectLabel>
          {models.openai.map((model) => (
            <SelectItem key={model.value} value={model.value} className="text-xs sm:text-sm">
              {model.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Anthropic Claude</SelectLabel>
          {models.anthropic.map((model) => (
            <SelectItem key={model.value} value={model.value} className="text-xs sm:text-sm">
              {model.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ModelSelector;
