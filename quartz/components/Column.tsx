import { getFlexContainer } from "../util/getFlexContainer"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

export default ((children?: QuartzComponent[]) => {
  if (children) {
    return getFlexContainer(children!, "forced-column")
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor
