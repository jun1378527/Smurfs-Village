import React, { useRef, useEffect } from "react";
import scrap_yes from "../../img/scrap_yes.svg";
import scrap_none from "../../img/scrap_none.svg";

const Card = ({ data, index, type, toggleScrap }) => {
  const hashtagsRef = useRef(null);

  useEffect(() => {
    const containerWidth = hashtagsRef.current.offsetWidth;
    let totalWidth = 0;
    const hashtags = Array.from(hashtagsRef.current.children);

    hashtags.forEach(tag => {
      totalWidth += tag.offsetWidth + 5; // 5는 gap 크기
      if (totalWidth > containerWidth) {
        tag.style.display = "none";
      }
    });
  }, [data.hashtags]);

  return (
    <div className="card" key={index}>
      <div className="card-image-wrapper">
        <img src={data.image} alt="Sample" className="card-image" />
        <div className="participants-info">
          {data.currentParticipants} / {data.maxParticipants}명
        </div>
        <img
          src={data.scrap ? scrap_yes : scrap_none}
          alt="Scrap"
          className="scrap-icon"
          onClick={() => toggleScrap(index, type)}
        />
      </div>
      <div className="card-content">
        <div className="card-line-1">
          <h3>{data.title}</h3>
          <span>작성자: {data.author}</span>
        </div>
        <p>조회수: {data.views}</p>
        <p className="card_desc">{data.description}</p>
        <div className="hashtags" ref={hashtagsRef}>
          {data.hashtags.map((tag, idx) => (
            <span
              key={idx}
              className={`hashtag ${idx % 2 === 0 ? "alternate-color" : ""}`}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
