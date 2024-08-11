import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
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
  Component.Graph({ localGraph: { showTags: false }, globalGraph: { showTags: false } }),
  Component.Backlinks(),
  Component.DesktopOnly(Component.RecentNotes({ limit: 5, showTags: false })),
]

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
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
