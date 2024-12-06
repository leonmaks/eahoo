"use client"

import StarterKit from "@tiptap/starter-kit"
import { useEditor, EditorContent } from "@tiptap/react"
// import Image from "@tiptap/extension-image"
import ImageResize from "tiptap-extension-resize-image"
import FontFamily from "@tiptap/extension-font-family"
import TextStyle from "@tiptap/extension-text-style"
import TextAlign from '@tiptap/extension-text-align'
import { Color } from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Underline from "@tiptap/extension-underline"
import Table from "@tiptap/extension-table"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TableRow from "@tiptap/extension-table-row"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import Link from "@tiptap/extension-link"

import { useEditorStore } from "./use-editor-store"
import { FontSizeExtension } from "./font-size-extension"
import { LineHeightExtension } from "./line-height-extension"
import { Ruler } from "./Ruler"



export const Editor = () => {

  const { setEditor } = useEditorStore()

  const editor = useEditor({
    onCreate({ editor }) { setEditor(editor) },
    onDestroy() { setEditor(null) },
    onUpdate({ editor }) { setEditor(editor) },
    onSelectionUpdate({ editor }) { setEditor(editor) },
    onTransaction({ editor }) { setEditor(editor) },
    onFocus({ editor }) { setEditor(editor) },
    onBlur({ editor }) { setEditor(editor) },
    onContentError({ editor }) { setEditor(editor) },

    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class: "flex flex-col bg-white min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text border border-[#c7c7c7] focus:outline-none print:border-0",
      },
    },
    extensions: [
      StarterKit,
      FontSizeExtension,
      LineHeightExtension,
      FontFamily,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      // Image,
      ImageResize,
      Table,
      TableHeader,
      TableRow,
      TableCell,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TaskList,
    ],
    content: `
    <p>Hello World!</p>
      <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
    `,
    immediatelyRender: false,
  })

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
