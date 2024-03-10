<a href="https://ai-fusion-kit.vercel.app/">
  <img alt="AI Fusion Kit" src="https://einfachalex.net/wp-content/uploads/2023/11/68747470733a2f2f61692d667573696f6e2d6b69742e76657263656c2e6170702f5f6e6578742f696d6167653f75726c3d25324673637265656e73686f742e706e6726773d3139323026713d3735-Kopie.webp">
  <h1 align="center">AI Fusion Kit</h1>
</a>

<p align="center">
  Eine funktionsreiche, hochgradig anpassbare KI-Web-App-Vorlage, ermöglicht durch Next.js.
</p>

<p align="center">
  <a href="#tech-stacks"><strong>Technologiestapel</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#lokal-ausführen"><strong>Lokal Ausführen</strong></a> ·
  <a href="#autoren"><strong>Autoren</strong></a>
</p>
<br/>

## Technologiestapel
 - [Typescript](https://www.typescriptlang.org/)
 - [ReactJS](https://reactjs.org/)
 - [NextJS](https://nextjs.org/)
 - [Supabase](https://supabase.com/)
 - [Open AI API](https://platform.openai.com/docs/api-reference)
 - [Vercel AI SDK](https://github.com/vercel/ai)
 - [TailwindCSS](https://tailwindcss.com/)
 - [Shadcn UI](https://ui.shadcn.com/)
 - [Next.js AI Chatbot](https://github.com/vercel-labs/ai-chatbot)

## Installation

1. Klone das Repository
   ```sh
   git clone https://github.com/einfachalf/einfach.fusion.git
   ```

2. Installiere Abhängigkeiten
   ```sh
   yarn install
   ```

3. Richte dein Supabase-Projekt ein
   - Zuerst benötigst du ein Supabase-Projekt, das über das [Supabase-Dashboard](https://database.new/) erstellt werden kann
   - Führe den folgenden Snippet in deinem Projekt [SQL Editor](https://supabase.com/dashboard/project/_/sql/new) aus
     ```sql
     create table profiles (
       id uuid default uuid_generate_v4() primary key,
       updated_at timestamp default now(),
       username text,
       full_name text,
       avatar_url text,
       website text
     );

     create table apps (
       id uuid default uuid_generate_v4() primary key,
       name text not null,
       description text,
       createdAt timestamp default now(),
       updatedAt timestamp default now(),
       slug text not null,
       logoUrl text
     );

     create table chats (
       id uuid default uuid_generate_v4() primary key,
       name text,
       createdAt timestamp default now(),
       updatedAt timestamp default now(),
       profileId uuid references profiles (id),
       appId uuid references apps (id),
       settings json
     );

     create table messages (
       id uuid default uuid_generate_v4() primary key,
       role public.message_role,
       content text,
       createdAt timestamp default now(),
       updatedAt timestamp default now(),
       profileId uuid references profiles (id),
       chatId uuid references chats (id)
     );
     ```

4. Erstelle ein Konto bei OpenAI und generiere deinen eigenen API-Schlüssel

5. Benenne `.env.example` in `.env.local` um und fülle es mit deinen Werten aus
   > Hinweis: Du solltest deine `.env`-Datei nicht committen, da sie Geheimnisse preisgibt, die anderen die Kontrolle über den Zugang zu deinen verschiedenen OpenAI- und Authentifizierungsanbieterkonten ermöglichen würden.

## Lokal Ausführen

1. Gehe zum Projektverzeichnis
   ```bash
   cd ai-fusion-kit
   ```

2. Starte die Web-App
   ```bash
   yarn dev
   ```
