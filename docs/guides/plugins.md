---
slug: /plugins
---

# Using Plugins

:::tip

When we need to do some extensions to Answer's functionality, for example, OAuth login, we design a way to use plugins to implement these functions. 

:::

## Introduction

### Official plugins

You can find a list of officially supported plugins for Answer [here](https://github.com/apache/incubator-answer-plugins).

### Plugin type

We classify plugins into different types. Different types of plugins have different functions. Plugins of the same type have the same effect, but are implemented differently.

- **Connector**: The Connector plugin helps us to implement third-party login functionality. e.g. `GitHub OAuth Login`
- **Storage**: The Storage plugin helps us to upload files to third-party storage. (preview)
- **Cache**: Support for using different caching middleware. e.g. `Redis` (preview)
- **Filter**: Filter out illegal questions or answers. (coming soon)
- **Render**: Parsers for different content formats. (coming soon)
- **Finder**: Support for using search engines to speed up the search for question answers. (coming soon)

## Build

Answer binary supports packaging different required plugins into the binary.

### Prerequisites

- Original Answer binary
- [Golang](https://go.dev/) `>=1.18`
- [Node.js](https://nodejs.org/) `>=16.17`
- [pnpm](https://pnpm.io/) `>=7`

### Command

:::tip

We use the `build` command provided with the Answer binary to rebuild a version of Answer with the plugin.

:::

For example, let's see how to build an Answer binary that includes the github third-party login plugin.

```shell
# answer build --with [plugin@plugin_version=[replacement]] --output [file]
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github

# build a new answer with github login plugin then output to ./new_answer.
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0 --output ./new_answer

# with multiple plugins
$ ./answer build \
--with github.com/apache/incubator-answer-plugins/connector-github \
--with github.com/apache/incubator-answer-plugins/connector-google

# with local plugins
$ ./answer build --with github.com/apache/incubator-answer-plugins/connector-github@1.0.0=/my-local-space

# cross compilation. Build a linux-amd64 binary in macos
$ CGO_ENABLED=0 GOOS=linux GOARCH=amd64 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github

# specify the answer version using ANSWER_MODULE environment variable
$ ANSWER_MODULE=github.com/apache/incubator-answer@v1.2.0-RC1 ./answer build --with github.com/apache/incubator-answer-plugins/connector-github
```

:::tip

You can use the `plugin` command to list the current binary containing plugins.

:::

```shell
$ ./new_answer plugin

# output
# github connector[0.0.1] made by answerdev
# google connector[0.0.1] made by answerdev
```

## Third-party plugin

:::tip

We recommend the use of [official plugins](https://github.com/apache/incubator-answer-plugins), if you want to use third-party plugins, refer to the following.

:::

- If the third-party plugin is publicly available, you can build with it like official plugins.
- If the third-party plugin is private, you need to download it then build with.

## Usage

The Answer with the plugin version is used in the same way as before. You can find the plugin's configuration in the admin page.

![plugin-config-admin-page](/img/docs/plugin-config-admin-page.png)

## Upgrade

You need build a new Answer binary with the new plugin version, then replace the old Answer binary with the new one.

## Develop and contributing

Please refer to [the documentation](/community/plugins) for details.

## Design & principle

Since Golang is a static language, there is no friendly plugin mechanism. So instead of a dynamic approach, we use recompilation for deployment. Please refer to [the blog](/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way) for details.
