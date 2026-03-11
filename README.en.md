# Decentralized P2P Chat & Community Platform

This is an open-source project to build a decentralized, peer-to-peer communication platform. The goal is to create a self-moderating, censorship-resistant network where value is determined by community contribution, not financial power.

## Core Concepts

- **P2P Network**: The platform operates on a WebRTC-based peer-to-peer network. There is no central server for messages.
- **Blockchain Rooms**: Each chat room is a separate, independent blockchain.
- **"Time" as Currency**: An internal economic system based on "Time" and "Reputation" to reward valuable contributions.
- **AGPLv3 License**: The project is licensed under the GNU AGPLv3 to ensure it remains open and free.

## Tech Stack

- **Monorepo**: Managed with npm workspaces.
- **Web App**: Vue.js + Ionic
- **Bot**: Node.js + Telegraf
- **Database**: RxDB (local-first, P2P replication)
- **Shared Logic**: Core blockchain and economic logic shared between the web app and the bot.

## Project Structure

- `/packages/webapp`: The Vue/Ionic frontend.
- `/packages/bot`: The Telegram bot acting as a network node.
- `/packages/shared`: Shared logic, schemas, and utilities.