class Page {
  AUTH = "/auth";

  HOME = "/";
  JEWELRY = "/jewelry";

  EARRINGS = `${this.JEWELRY}/earrings`;
  BRACELETS = `${this.JEWELRY}/bracelets`;
  RINGS = `${this.JEWELRY}/rings`;
  NECKLACES = `${this.JEWELRY}/necklaces`;

  VENERABRANDS = `${this.JEWELRY}/brand-venera`;
  SALE = `${this.JEWELRY}/sale`;

  BRANDS = `/brands`;
  GIFTCARD = `/gift-card`;
}

export const PAGE = new Page();
