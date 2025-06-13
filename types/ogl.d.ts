declare module 'ogl' {
  export class Renderer {
    constructor(options?: { 
      dpr?: number; 
      alpha?: boolean; 
      canvas?: HTMLCanvasElement;
    });
    gl: WebGLRenderingContext;
    setSize(width: number, height: number): void;
    render(scene: Transform): void;
    dispose(): void;
  }

  export class Transform {
    constructor();
    add(child: Transform): void;
    remove(child: Transform): void;
    set(position: Vec3, rotation: Vec3, scale: Vec3): void;
    scene: Transform;
    parent: Transform | null;
    scale: Vec3;
    time: number;
    add(mesh: any): void;
    remove(mesh: any): void;
  }

  export class Vec3 {
    constructor(x?: number, y?: number, z?: number);
    copy(v: Vec3): Vec3;
    set(x: number, y: number, z: number): Vec3;
    lerp(v: Vec3, alpha: number): Vec3;
    add(v: Vec3): Vec3;
    sub(v: Vec3): Vec3;
    multiply(scalar: number): Vec3;
    x: number;
    y: number;
    z: number;
  }

  export class Polyline {
    constructor(gl: WebGLRenderingContext, options: { 
      color: Color;
      thickness: number;
      points: Vec3[];
    });
    destroy(): void;
    updateGeometry(): void;
    color: Color;
    resize(): void;
    mesh: any;
  }

  export class Color {
    constructor(r: number, g: number, b: number, a?: number);
  }

  export class Mesh {
    constructor();
    destroy(): void;
  }

  export class Geometry {
    constructor();
    dispose(): void;
  }

  export class Program {
    constructor(gl: WebGLRenderingContext, options: {
      vertex: string;
      fragment: string;
    });
    destroy(): void;
  }
}
