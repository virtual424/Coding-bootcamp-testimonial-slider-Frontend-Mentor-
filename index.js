const prevBtn = document.querySelector(".slider > img[alt='icon-prev']");
const nextBtn = document.querySelector(".slider > img[alt='icon-next']");

const userImage = document.querySelector(".userImg > img");
const userDesc = document.querySelector(".userDesc");
const userName = document.querySelector(".username");
const userDesig = document.querySelector(".userDesig");

const clearOlderContents = () => {
  userImage.src = ``;
  userImage.alt = ``;
  userDesc.textContent = ``;
  userName.textContent = "";
  userDesig.textContent = "";
};

const setTanya = () => {
  userImage.src = `./images/image-tanya.jpg`;
  userImage.alt = `image-tanya`;
  userDesc.textContent = `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now
          in the job of my dreams and so excited about the future. ”`;
  userName.textContent = "Tanya Sinclair";
  userDesig.textContent = "UX Engineer";
};

const setJohn = () => {
  userImage.src = `./images/image-john.jpg`;
  userImage.alt = `image-john`;
  userDesc.textContent = `“ If you want to lay the best foundation possible I’d recommend taking this course.
  The depth the instructors go into is incredible. I now feel so confident about
  starting up as a professional developer. ”`;
  userName.textContent = "John Tarkpor";
  userDesig.textContent = "Junior Front-end Developer";
};

const setUser = (name) => {
  switch (name) {
    case "tanya":
      setTanya();
      break;
    case "john":
      setJohn();
      break;
  }
};
setUser("tanya");

prevBtn.addEventListener("click", setTanya);
nextBtn.addEventListener("click", setJohn);
