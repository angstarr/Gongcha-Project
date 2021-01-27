var curBxImgNumb = 1;
var bxImg = document.getElementById("season");

function bx_image_control(isNextBtn)
{
  if (isNextBtn)
  {
    if (curBxImgNumb == 3)
    {
      return;
    } else {
      curBxImgNumb++;
    }
  }
  else
  {
    if (curBxImgNumb == 1)
    {
      return;
    } else {
      curBxImgNumb--;
    }
  }
  bxImg.setAttribute("src", "css/img/comingsoon_" + curBxImgNumb + ".jpg");
}
