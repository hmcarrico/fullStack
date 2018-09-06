drop table if exists memes;
drop table if exists users;

create table if not exists users (
    id serial primary key,
    auth0_id text unique not null,
    name varchar(100),
    email varchar(100),
    picture text
);

create table if not exists memes (
    id serial primary key,
    url text not null,
    user_id integer references users (id)
);

insert into memes (url) values
('https://i.pinimg.com/originals/1a/55/1c/1a551c2cd329fe5314ded55925c21c9a.jpg')

select * from memes;