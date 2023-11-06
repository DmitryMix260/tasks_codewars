// https://www.codewars.com/kata/remove-string-spaces

function noSpace(x) {
  return x.replace(/[ ]/g, "");
}

noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"); // "8j8mBliB8gimjB8B8jlB"

noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"); //"88Bifk8hB8BB8BBBB888chl8BhBfd"
noSpace("8aaaaa dddd r     "); // "8aaaaaddddr"
noSpace("jfBm  gk lf8hg  88lbe8 "); // "jfBmgklf8hg88lbe8"
noSpace("8j aam"); // "8jaam"
