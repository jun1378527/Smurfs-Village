import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "./MatterComponent.css";

const MatterComponent = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const wallsRef = useRef([]);
  const scrollDeltaY = useRef(0);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(Date.now());
  const scrollBehavior = useRef("smooth");

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Mouse, MouseConstraint, World } =
      Matter;

    const engine = Engine.create();
    const runner = Runner.create();
    const { world } = engine;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "#fff",
      },
    });

    engineRef.current = engine;
    renderRef.current = render;

    const wallThickness = 100;

    const createWalls = (width, height) => {
      return [
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, {
          isStatic: true,
        }),
        Bodies.rectangle(
          width / 2,
          height + wallThickness / 2,
          width,
          wallThickness,
          { isStatic: true }
        ),
        Bodies.rectangle(
          width + wallThickness / 2,
          height / 2,
          wallThickness,
          height,
          { isStatic: true }
        ),
        Bodies.rectangle(
          -wallThickness / 2,
          height / 2,
          wallThickness,
          height,
          { isStatic: true }
        ),
      ];
    };

    const walls = createWalls(render.options.width, render.options.height);
    wallsRef.current = walls;

    const boxA = Bodies.rectangle(render.options.width / 2, 200, 80, 80, {
      render: {
        fillStyle: "#000",
      },
    });

    World.add(world, [boxA, ...walls]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);

    render.mouse = mouse;

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const width = sceneRef.current.clientWidth;
      const height = sceneRef.current.clientHeight;

      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      Render.setPixelRatio(render, window.devicePixelRatio);
      render.canvas.width = width;
      render.canvas.height = height;
      Matter.Bounds.update(render.bounds, [
        { x: 0, y: 0 },
        { x: width, y: height },
      ]);

      wallsRef.current.forEach(wall => {
        World.remove(world, wall);
      });

      const newWalls = createWalls(width, height);
      World.add(world, newWalls);
      wallsRef.current = newWalls;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // window 스크롤을 업데이트하는 마우스 휠 이벤트 추가
  useEffect(() => {
    const handleWheel = event => {
      if (sceneRef.current && sceneRef.current.contains(event.target)) {
        event.preventDefault(); // 기본 스크롤 방지
        const now = Date.now();

        if (now - lastScrollTime.current < 100) {
          // 최근 스크롤 이벤트로부터 200ms 이내에 새 스크롤 이벤트가 발생한 경우
          scrollBehavior.current = "auto";
        } else {
          // 최근 스크롤 이벤트로부터 200ms 이후에 새 스크롤 이벤트가 발생한 경우
          scrollBehavior.current = "smooth";
        }

        scrollDeltaY.current += event.deltaY;
        lastScrollTime.current = now;

        if (!isScrolling.current) {
          isScrolling.current = true;
          requestAnimationFrame(performScroll);
        }
      }
    };

    const performScroll = () => {
      window.scrollBy({
        top: scrollDeltaY.current,
        left: 0,
        behavior: scrollBehavior.current, // 부드러운 스크롤
      });
      scrollDeltaY.current = 0;
      isScrolling.current = false;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel, { passive: false });
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="matter-scene"
      style={{ height: "100vh" }}
    ></div>
  );
};

export default MatterComponent;
