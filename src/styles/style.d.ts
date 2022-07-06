import "styled-components";
import { ColorTypes } from "./colors";
import { Metrics } from "./metrics";

declare module "styled-components" {
    export interface DefaultTheme extends ColorTypes, Metrics {};
}
