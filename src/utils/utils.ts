
export function wait(ms: number) {
 return new Promise(resolve => setTimeout(resolve, ms)); 
} 

export function formatImageUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) {
      return path; // External URL, return as-is
    }
  
    // BASE_URL ensures proper prefixing (for images hosted in subfolders)
    return `${import.meta.env.BASE_URL}${path}`
}