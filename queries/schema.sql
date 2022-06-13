CREATE DATABASE postgres
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';

-- Table: public.songs

-- DROP TABLE IF EXISTS public.songs;

CREATE TABLE IF NOT EXISTS public.songs
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    genre text COLLATE pg_catalog."default",
    album text COLLATE pg_catalog."default",
    duration numeric,
    artist_name text COLLATE pg_catalog."default",
    created text COLLATE pg_catalog."default",
    modified text COLLATE pg_catalog."default",
    CONSTRAINT songs_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.songs
    OWNER to postgres;

-- Table: public.artists

-- DROP TABLE IF EXISTS public.artists;

CREATE TABLE IF NOT EXISTS public.artists
(
    artist_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    song_id integer,
    name text COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default",
    album text COLLATE pg_catalog."default",
    created text COLLATE pg_catalog."default",
    modified text COLLATE pg_catalog."default",
    CONSTRAINT artists_pkey PRIMARY KEY (artist_id),
    CONSTRAINT fk_songs FOREIGN KEY (song_id)
        REFERENCES public.songs (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.artists
    OWNER to postgres;