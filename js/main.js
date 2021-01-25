var num = 1;
function bx_image_control(direct)
{
  if (direct)
  {
    if (num == 3) return;
    num++;
  }
  else
  {
    if (num == 1) return;
    num--;
}

var imgTag = document.getElementById("season");
imgTag.setAttribute("src", "CSS/comingsoon_" + num + ".jpg");
}
