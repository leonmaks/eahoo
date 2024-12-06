import { Extension } from "@tiptap/react"
// import TextStyle from "@tiptap/extension-text-style"

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (size: string) => ReturnType
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType
    }
  }
}

export const FontSizeExtension = Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
    }
  },
  addGlobalAttributes() {
    return [{
      types: this.options.types,
      attributes: {
        fontSize: {
          default: null,
          parseHTML: element => element.style.fontSize,
          renderHTML: attributes => {

            if (!attributes.fontSize) {
              return {}
            }

            return {
              style: `font-size: ${attributes.fontSize}`,
            }
          },
        },
      },
    }]
  },
  addCommands() {
    return {
      setFontSize: (fontSize: string) => ({ chain }) => (
        chain().setMark("textStyle", { fontSize }).run()
      ),
      unsetFontSize: () => ({ chain }) => (
        chain().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
      )
    }
  },
})
