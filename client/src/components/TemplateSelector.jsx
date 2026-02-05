import { Layout } from "lucide-react"
import { useState } from "react"

const TemplateSelector = ({ selectedTemplate, onchange }) => {

    const [isOpen,setIsOpen]=useState(false)

    const templates=[
        {id:"classic", name:"Classic",preview:"A clean, traditional resume format"},
        {id:"modern", name:"Modern",preview:"Sleek design with modern font"},
        {id:"minimal", name:"Minimal",preview:"Minimalist design"},
        {id:"minimalImage", name:"Minimal with Image",preview:"Minimalist with profile image"},
    ]

  return (
    <div className="relative">
        <button onClick={()=>setIsOpen(!isOpen)} className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg">
            <Layout size={14}/><span className="max-sm:hidden">Template</span>
        </button>
        {isOpen && (
            <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {templates.map((template) => (
                    <button
                        key={template.id}
                        onClick={() => {
                            onchange(template.id);
                            setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                            selectedTemplate === template.id ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                    >
                        <div className="font-medium">{template.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{template.preview}</div>
                    </button>
                ))}
            </div>
        )}
    </div>
  )
}

export default TemplateSelector