export function useToast() {
  return {
    toast: ({
      title,
      description,
    }: {
      title: string;
      description?: string;
    }) => {
      alert(description ? `${title}\n\n${description}` : title);
    },
  };
}
