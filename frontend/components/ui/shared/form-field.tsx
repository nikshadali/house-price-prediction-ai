import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AppFormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  error?: string;
  registration: any;
}

export function AppFormField({
  label,
  placeholder,
  type = "text",
  error,
  registration,
}: AppFormFieldProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Input
        type={type}
        placeholder={placeholder}
        {...registration}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}