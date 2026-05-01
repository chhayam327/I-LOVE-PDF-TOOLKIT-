import {
  Combine, Scissors, Minimize2, FileText, Presentation, FileSpreadsheet,
  FileType, FileImage, Image as ImageIcon, PenTool, Stamp, RotateCw,
  Globe, Unlock, ShieldCheck, LayoutGrid, Archive, Wrench, Hash,
  ScanLine, ScanText, GitCompare, EyeOff, Crop, Sparkles, Languages,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Category =
  | "Organize" | "Optimize" | "Convert" | "Edit" | "Security" | "Intelligence";

export type Tool = {
  slug: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  hue: string; // tailwind color class for icon tile
  category: Category;
};

export const TOOLS: Tool[] = [
  { slug: "merge", title: "Merge PDF", desc: "Combine PDFs in the order you want with the easiest PDF merger.", icon: Combine, hue: "bg-orange-100 text-orange-600", category: "Organize" },
  { slug: "split", title: "Split PDF", desc: "Separate one page or a whole set into independent PDF files.", icon: Scissors, hue: "bg-orange-100 text-orange-600", category: "Organize" },
  { slug: "compress", title: "Compress PDF", desc: "Reduce file size while optimizing for maximal PDF quality.", icon: Minimize2, hue: "bg-emerald-100 text-emerald-600", category: "Optimize" },
  { slug: "pdf-to-word", title: "PDF to Word", desc: "Convert PDF files into easy-to-edit DOC and DOCX documents.", icon: FileText, hue: "bg-blue-100 text-blue-600", category: "Convert" },
  { slug: "pdf-to-powerpoint", title: "PDF to PowerPoint", desc: "Turn your PDF files into easy-to-edit PPT and PPTX slideshows.", icon: Presentation, hue: "bg-orange-100 text-orange-600", category: "Convert" },
  { slug: "pdf-to-excel", title: "PDF to Excel", desc: "Pull data straight from PDFs into Excel spreadsheets in seconds.", icon: FileSpreadsheet, hue: "bg-emerald-100 text-emerald-600", category: "Convert" },
  { slug: "word-to-pdf", title: "Word to PDF", desc: "Make DOC and DOCX files easy to read by converting them to PDF.", icon: FileType, hue: "bg-blue-100 text-blue-600", category: "Convert" },
  { slug: "powerpoint-to-pdf", title: "PowerPoint to PDF", desc: "Make PPT and PPTX slideshows easy to view by converting to PDF.", icon: Presentation, hue: "bg-orange-100 text-orange-600", category: "Convert" },
  { slug: "excel-to-pdf", title: "Excel to PDF", desc: "Make EXCEL spreadsheets easy to read by converting them to PDF.", icon: FileSpreadsheet, hue: "bg-emerald-100 text-emerald-600", category: "Convert" },
  { slug: "edit-pdf", title: "Edit PDF", desc: "Add text, images, shapes or freehand annotations to a PDF.", icon: PenTool, hue: "bg-fuchsia-100 text-fuchsia-600", category: "Edit" },
  { slug: "pdf-to-jpg", title: "PDF to JPG", desc: "Convert each PDF page into a JPG or extract all images in a PDF.", icon: FileImage, hue: "bg-yellow-100 text-yellow-600", category: "Convert" },
  { slug: "jpg-to-pdf", title: "JPG to PDF", desc: "Convert JPG images to PDF in seconds. Adjust orientation and margins.", icon: ImageIcon, hue: "bg-yellow-100 text-yellow-600", category: "Convert" },
  { slug: "sign", title: "Sign PDF", desc: "Sign yourself or request electronic signatures from others.", icon: PenTool, hue: "bg-blue-100 text-blue-600", category: "Edit" },
  { slug: "watermark", title: "Watermark", desc: "Stamp an image or text over your PDF in seconds.", icon: Stamp, hue: "bg-fuchsia-100 text-fuchsia-600", category: "Edit" },
  { slug: "rotate", title: "Rotate PDF", desc: "Rotate your PDFs the way you need them, multiple at once.", icon: RotateCw, hue: "bg-fuchsia-100 text-fuchsia-600", category: "Edit" },
  { slug: "html-to-pdf", title: "HTML to PDF", desc: "Convert webpages in HTML to PDF. Paste the URL and convert.", icon: Globe, hue: "bg-yellow-100 text-yellow-600", category: "Convert" },
  { slug: "unlock", title: "Unlock PDF", desc: "Remove PDF password security and use PDFs as you want.", icon: Unlock, hue: "bg-blue-100 text-blue-600", category: "Security" },
  { slug: "protect", title: "Protect PDF", desc: "Protect PDF files with a password to prevent unauthorized access.", icon: ShieldCheck, hue: "bg-blue-100 text-blue-600", category: "Security" },
  { slug: "organize", title: "Organize PDF", desc: "Sort, delete or add PDF pages at your convenience.", icon: LayoutGrid, hue: "bg-orange-100 text-orange-600", category: "Organize" },
  { slug: "pdf-to-pdfa", title: "PDF to PDF/A", desc: "Transform your PDF to PDF/A for long-term archiving.", icon: Archive, hue: "bg-blue-100 text-blue-600", category: "Convert" },
  { slug: "repair", title: "Repair PDF", desc: "Repair a damaged PDF and recover data from corrupt files.", icon: Wrench, hue: "bg-emerald-100 text-emerald-600", category: "Optimize" },
  { slug: "page-numbers", title: "Page numbers", desc: "Add page numbers into PDFs with custom positions and typography.", icon: Hash, hue: "bg-fuchsia-100 text-fuchsia-600", category: "Edit" },
  { slug: "scan", title: "Scan to PDF", desc: "Capture document scans from your mobile and send to your browser.", icon: ScanLine, hue: "bg-orange-100 text-orange-600", category: "Convert" },
  { slug: "ocr", title: "OCR PDF", desc: "Convert scanned PDFs into searchable and selectable documents.", icon: ScanText, hue: "bg-emerald-100 text-emerald-600", category: "Intelligence" },
  { slug: "compare", title: "Compare PDF", desc: "Side-by-side comparison to spot changes between versions.", icon: GitCompare, hue: "bg-blue-100 text-blue-600", category: "Intelligence" },
  { slug: "redact", title: "Redact PDF", desc: "Permanently remove sensitive information from a PDF.", icon: EyeOff, hue: "bg-blue-100 text-blue-600", category: "Security" },
  { slug: "crop", title: "Crop PDF", desc: "Crop margins or select specific areas across pages.", icon: Crop, hue: "bg-fuchsia-100 text-fuchsia-600", category: "Edit" },
  { slug: "summarizer", title: "AI Summarizer", desc: "Generate concise summaries with clear key points in seconds.", icon: Sparkles, hue: "bg-violet-100 text-violet-600", category: "Intelligence" },
  { slug: "translate", title: "Translate PDF", desc: "AI-powered PDF translation. Keeps fonts, layout and formatting.", icon: Languages, hue: "bg-violet-100 text-violet-600", category: "Intelligence" },
];

export const CATEGORIES: ("All" | Category)[] = [
  "All", "Organize", "Optimize", "Convert", "Edit", "Security", "Intelligence",
];

export function getTool(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}
