CREATE TABLE "gallery" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(200) NOT NULL,
"description" VARCHAR(250) NOT NULL,
"likes" INTEGER);

INSERT INTO "gallery" (path, description, likes) 
VALUES ('images/yosemite.jpg', 'One of my favorite hiking places is Yosemite National Park.', 0),
('images/crawfish.jpg', 'There is nothing quite like a Cajun Crawfish Boil', 0),
('images/bike.jpg', 'Going mountain biking is one of my favorite forms of adventuring', 0);
