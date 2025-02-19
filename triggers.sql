CREATE OR REPLACE FUNCTION delete_comments_and_post()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM "Comments" WHERE "postID" = OLD."id";
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER delete_comments_and_post
BEFORE DELETE ON "Posts"
FOR EACH ROW
EXECUTE FUNCTION delete_comments_and_post();