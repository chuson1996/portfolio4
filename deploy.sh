npm run build &&
cd build &&
touch index.php &&
echo "<?php header( 'Location: /index.html' ) ;  ?>" >> index.php &&
git init &&
heroku git:remote -a portfolio-sonc &&
git add . &&
git commit -m "Deploy" &&
git push heroku master -f &&
echo "Done"