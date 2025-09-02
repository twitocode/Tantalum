import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.MobileOnly(Component.Backlinks()),
    Component.MobileOnly(Component.Explorer({ title: "Navigation" })),
  ],
  footer: Component.Footer({
    links: {
      Source: "https://github.com/twitocode/Tantalum",
    },
  }),
}

const leftGlobalComponents = [
  Component.PageTitle(),
  Component.MobileOnly(Component.Spacer()),
  Component.Row([Component.Search(), Component.Darkmode()]),
  Component.DesktopOnly(Component.Explorer({ title: "Navigation" })),
]

const rightGlobalComponents = [
  Component.DesktopOnly(Component.RecentNotes({ limit: 5, showTags: false })),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.TagList(),
    Component.ContentMeta(),
  ],
  left: leftGlobalComponents,
  right: rightGlobalComponents,
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: leftGlobalComponents,
  right: rightGlobalComponents,
}
