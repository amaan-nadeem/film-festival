import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import React from "react"


const RichTextRenderer = ({ content, options, classes }) => {
  const defaultOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-4 md:text-lg">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc list-outsite pl-6 md:pl-12">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ul className="list-decimal list-outsite pl-6 md:pl-12">{children}</ul>
      ),
      [BLOCKS.HR]: () => <hr className="my-6 md:my-16 xl:mx-auto" />,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          className="mx-auto h-auto my-8 rounded-lg shadow-xl"
          src={node?.data?.target?.fields?.file["en-US"]?.url}
          alt={`${node?.data?.target?.fields?.title["en-US"]}`}
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        if (node?.data?.target?.fields?.videoEmbedUrl) {
          return (
            <iframe
              title={node?.data?.target?.fields?.title["en-US"]}
              src={node?.data?.target?.fields?.videoEmbedUrl["en-US"]}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )
        } else {
          const title = node?.data?.target?.fields?.title["en-US"]
          const description = node?.data?.target?.fields?.description
          const mediaAsset = {
            file: {
              url:
                node?.data?.target?.fields?.mediaAsset["en-US"].fields.file[
                  "en-US"
                ]?.url,
            },
          }

          const pdfData = { title, description, mediaAsset }

          //   return <DownloadableMediaModel content={true} data={pdfData} />
        }
      },
      [BLOCKS.QUOTE]: (node, children) => (
        <div className="my-6 bg-greyBG rounded-lg px-2 py-6 md:px-4 md:py-8 flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-32">
            {/* <Quote className="mb-2 md:mb-0 md:mr-4" /> */}
          </div>
          <div>
            {children.map((node, index) => (
              <h4
                key={index}
                className="siteFont w-full md:pr-2 text-white font-bold text-base md:text-2xl mt-2"
              >
                {node.props.children}
              </h4>
            ))}
          </div>
        </div>
      ),
      [INLINES.HYPERLINK]: node => {
        const { content, data } = node
        return (
          <a
            className="cursor-pointer text-blue-500 hover:underline hover:text-blue-700"
            href={data.uri}
            target="_blank"
            rel="noreferrer"
          >
            {content[0].value}
          </a>
        )
      },
    },
    renderMark: {
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.BOLD]: text => {
        return <span className="highlighted-text">{text}</span>
      },
    },
  }
  return documentToReactComponents(
    JSON.parse(content),
    options || defaultOptions
  )
}

export default RichTextRenderer
