interface VirtualScrollOptions {
  container: HTMLElement;
  content: HTMLElement;
  itemHeight: number;
}

class VirtualScrollSDK {
  private container: HTMLElement;
  private content: HTMLElement;
  private itemHeight: number;
  private containerHeight: number;
  private numVisibleItems: number;
  private startIndex: number;

  constructor(options: VirtualScrollOptions) {
    this.container = options.container;
    this.content = options.content;
    this.itemHeight = options.itemHeight;
    this.containerHeight = this.container.clientHeight;
    this.numVisibleItems = Math.ceil(this.containerHeight / this.itemHeight);
    this.startIndex = 0;

    this.container.addEventListener("scroll", this.handleScroll.bind(this));
  }

  private handleScroll() {
    const scrollTop = this.container.scrollTop;
    this.startIndex = Math.floor(scrollTop / this.itemHeight);
    const startItemIndex = Math.max(0, this.startIndex - 1);
    const endItemIndex = Math.min(
      this.startIndex + this.numVisibleItems,
      10000
    );
    this.renderItems(startItemIndex, endItemIndex);
  }

  private renderItems(startIndex: number, endIndex: number) {
    this.content.innerHTML = "";

    for (let i = startIndex; i < endIndex; i++) {
      const spanElement = document.createElement("span");
      spanElement.innerText = `Item ${i}`;
      this.content.appendChild(spanElement);
    }

    const contentHeight = this.itemHeight * 10000;
    this.content.style.height = `${contentHeight}px`;
  }

  public init() {
    this.renderItems(this.startIndex, this.startIndex + this.numVisibleItems);
  }
}

// 使用示例
const container = document.getElementById("container");
const content = document.getElementById("content");

if (container && content) {
  const virtualScroll = new VirtualScrollSDK({
    container,
    content,
    itemHeight: 30,
  });
  virtualScroll.init();
}
