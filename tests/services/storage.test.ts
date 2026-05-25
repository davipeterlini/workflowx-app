import { describe, it, expect, beforeEach } from "vitest";
import { storage } from "../../src/services/storage";

describe("storage service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves and retrieves value", () => {
    storage.set("key", { data: "value" });
    expect(storage.get("key", null)).toEqual({ data: "value" });
  });

  it("returns defaultValue when key does not exist", () => {
    expect(storage.get("inexistent", "fallback")).toBe("fallback");
  });

  it("removes item correctly", () => {
    storage.set("key", "value");
    storage.remove("key");
    expect(storage.get("key", null)).toBeNull();
  });
});