#!/bin/bash

mkdir dist dist/assets dist/assets/css dist/assets/favicon dist/assets/js dist/assets/images dist/assets/languages dist/views dist/views/includes dist/views/layout
touch dist/views/index.pug
mkdir src src/js src/languages src/sass src/sass/abstracts src/sass/base src/sass/components src/sass/layout src/sass/pages src/sass/themes src/sass/vendors
touch src/sass/main.sass src/sass/base/_normalize.sass src/sass/base/_global.sass src/sass/abstracts/_variables.sass src/sass/abstracts/_helpers.sass src/sass/abstracts/_colors.sass src/sass/abstracts/_mixins.sass src/sass/layout/_header.sass src/sass/layout/_grid.sass src/sass/layout/_footer.sass
echo node_modules >> .gitignore
