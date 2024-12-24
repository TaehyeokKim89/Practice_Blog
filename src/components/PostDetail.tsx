import { Link } from "react-router-dom";

const PostDetail = () => {
  return (
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">Lorem ipsum dolor sit amet</div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">블로그 제목</div>
          <div className="post__date">2023.07.08 토요일</div>
        </div>

        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`/posts/edit/1`} >수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          eleifend elementum est et ultricies. Nam vel urna pretium, bibendum
          est a, convallis tellus. Etiam nec magna congue, egestas lacus et,
          porttitor sapien. Nullam volutpat tortor a risus ultricies bibendum.
          Mauris neque massa, faucibus vel consectetur sit amet, malesuada in
          felis. In vitae sodales lectus. Curabitur iaculis porttitor dui, vitae
          eleifend lacus tincidunt in. Sed ut nisl nunc. Mauris tincidunt quis
          dolor nec facilisis. Duis accumsan urna eu orci hendrerit, et pharetra
          orci cursus. Integer ac velit vestibulum, aliquet risus eu,
          scelerisque neque. Duis a leo nibh. Aenean blandit sem in nulla
          finibus, at posuere dui porttitor. Nulla et arcu vitae lacus varius
          aliquam. Maecenas vitae felis lacus. Sed iaculis tortor lacus, sed
          porttitor velit cursus at. Suspendisse dapibus elementum orci, vitae
          sagittis tellus laoreet nec. Duis tempus massa a dolor dignissim, non
          molestie dolor porta. Vestibulum suscipit varius dolor in blandit.
          Morbi eu arcu id est viverra tincidunt. Nulla facilisi. Donec
          elementum purus at tortor aliquam mattis. Etiam sed velit vel elit
          auctor convallis ut eget risus. Phasellus et ex mauris. Nullam eu
          lorem mattis, accumsan arcu vitae, egestas leo. Pellentesque
          condimentum ex leo, et consequat diam imperdiet non. Cras quis tellus
          a sapien mattis lobortis vel ac ante. Donec venenatis at orci quis
          imperdiet. Cras blandit, dolor quis scelerisque rhoncus, orci dolor
          vestibulum enim, egestas eleifend nibh magna eu metus. Mauris maximus
          bibendum nulla, in placerat urna porta eleifend. Nunc congue a mauris
          in vestibulum. Nullam luctus malesuada turpis vel lobortis. Fusce
          congue ante vitae metus iaculis, id lobortis enim ornare. Fusce
          blandit tincidunt urna. Maecenas elementum gravida felis quis dapibus.
          Curabitur in eros in tortor fermentum mollis vel id mauris. Proin
          tincidunt blandit ex eget tempus. Pellentesque laoreet eget magna in
          luctus. Vivamus tincidunt vel ipsum in finibus. Maecenas convallis
          nisl lorem, eget efficitur justo luctus vitae. Pellentesque dapibus
          accumsan diam, sed elementum erat eleifend ut. Donec interdum non ex
          at suscipit.
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
