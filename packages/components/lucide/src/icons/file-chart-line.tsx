import { forwardRef } from "@yamada-ui/core"
import { FileChartLine as FileChartLineIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FileChartLineProps = LucideIconProps

/**
 * `FileChartLine` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileChartLine = forwardRef<FileChartLineProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={FileChartLineIcon} {...props} />,
)
