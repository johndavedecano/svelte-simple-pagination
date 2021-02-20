import paginate from "./../src/paginate";

describe("paginate.js", () => {
  it("1,1,1 arguments", () => {
    const { hasNext, hasPrev, pages } = paginate(1, 1, 1);
    expect(hasNext).toBe(false);
    expect(hasPrev).toBe(false);
    expect(pages.length).toBe(1);
  });

  it("11,100,10 arguments", () => {
    const { hasNext, hasPrev, pages } = paginate(11, 100, 10);
    expect(hasNext).toBe(true);
    expect(hasPrev).toBe(true);
    expect(pages.length).toBe(10);
  });

  it("large than number of pages", () => {
    const { hasNext, hasPrev, pages } = paginate(101, 100, 10);
    expect(hasPrev).toBe(true);
    expect(hasNext).toBe(false);
    expect(pages.length).toBe(0);
  });

  it("active is lesser than 1", () => {
    const { hasNext, hasPrev, pages } = paginate(-1, 100, 10);
    expect(hasPrev).toBe(false);
    expect(hasNext).toBe(true);
    expect(pages.length).toBe(0);
  });
});
