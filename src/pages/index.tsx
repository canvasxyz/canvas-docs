import React from "react"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import { Redirect } from "@docusaurus/router"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"

import styles from "./index.module.css"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return <Redirect to="./docs" />
}
