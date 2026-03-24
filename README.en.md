# Decentralized P2P Chat & Community Platform

This is an open-source project to build a decentralized, peer-to-peer communication platform. The goal is to create a self-moderating, censorship-resistant network where value is determined by community contribution, not financial power.

## Core Concepts

- **P2P Network**: The platform operates on a WebRTC-based peer-to-peer network. There is no central server for messages.
- **Blockchain Rooms**: Each chat room is a separate, independent blockchain.
- **"Time" as Currency**: An internal economic system based on "Time" and "Reputation" to reward valuable contributions.
- **AGPLv3 License**: The project is licensed under the GNU AGPLv3 to ensure it remains open and free.

## Current Status

This repository now contains an initial development scaffold:

- `/packages/shared`: shared TypeScript domain helpers for time/reputation mechanics and block primitives.
- `/packages/bot`: a minimal Node.js bot/node entrypoint that exercises the shared domain layer.
- `/packages/webapp`: an initial browser UI scaffold served by a lightweight local Node server.

The long-term target stack remains Vue.js + Ionic for the frontend and Telegraf for the bot, but the current implementation focuses on a lightweight MVP foundation so development can proceed incrementally.

## Tech Stack

- **Monorepo**: Managed with npm workspaces.
- **Language**: TypeScript
- **Web App**: Lightweight browser scaffold, with Vue.js + Ionic planned next.
- **Bot**: Node.js runtime scaffold, with Telegraf integration planned next.
- **Shared Logic**: Core blockchain and economic logic shared between the web app and the bot.

## Project Structure

- `/packages/webapp`: The browser-based MVP frontend scaffold.
- `/packages/bot`: The bot/node scaffold.
- `/packages/shared`: Shared logic, schemas, and utilities.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Build all workspaces: `npm run build`
4. Run the web application scaffold: `npm run webapp`
5. Run the bot scaffold: `npm run bot`
