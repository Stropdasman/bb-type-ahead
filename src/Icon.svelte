<script>
  import "@phosphor-icons/web/regular/style.css";
  import "@phosphor-icons/web/bold/style.css";
  import "@phosphor-icons/web/fill/style.css";
  import { getPhosphorIcon } from "./iconMap";

  export let size = "M";
  export let name = "plus";
  export let hidden = false;
  export let hoverable = false;
  export let disabled = false;
  export let color = undefined;
  export let hoverColor = undefined;
  export let tooltip = undefined;
  export let ariaLabel = undefined;
  export let weight = "regular";
  export let className = "";

  const sizeMap = {
    XXS: "12px",
    XS: "14px",
    S: "16px",
    M: "18px",
    L: "22px",
    XL: "28px",
    XXL: "36px",
    XXXL: "72px",
  };

  let restProps = {};
  let providedClass = "";

  $: ({ class: providedClass = "", ...restProps } = $$restProps);
  $: resolvedIcon = getPhosphorIcon(name);
  $: phosphorClass = `ph ph-${weight} ph-${resolvedIcon}`;
  $: styleString = buildStyle(size, color, hoverColor);
  $: computedClass = [className, providedClass, phosphorClass, hoverable ? "hoverable" : "", disabled ? "disabled" : ""]
    .filter(Boolean)
    .join(" ");
  $: computedAriaLabel = hidden ? undefined : ariaLabel || tooltip || name;

  const buildStyle = (sizeProp, colorProp, hoverColorProp) => {
    const resolvedSize = sizeMap[sizeProp] || sizeMap.M;
    let style = `--size:${resolvedSize};`;
    if (colorProp) {
      style += `--color:${colorProp};`;
    }
    if (hoverColorProp) {
      style += `--hover-color:${hoverColorProp};`;
    }
    return style;
  };
</script>

<i
  class={computedClass}
  style={styleString}
  aria-hidden={hidden ? "true" : "false"}
  aria-label={computedAriaLabel}
  title={tooltip}
  {...restProps}
/>

<style>
  i {
    display: grid;
    place-items: center;
    color: var(--color, inherit);
    transition: color 130ms ease-out;
    font-size: var(--size);
  }

  i.hoverable {
    pointer-events: all;
  }

  i.hoverable:hover {
    color: var(--hover-color, var(--spectrum-global-color-gray-900));
    cursor: pointer;
  }

  i.hoverable:active {
    color: var(--hover-color, var(--spectrum-global-color-gray-900));
  }

  i.disabled {
    color: var(--spectrum-global-color-gray-500);
    pointer-events: none;
  }
</style>
