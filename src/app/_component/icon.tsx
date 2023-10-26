const withIcon = (icon: string) => {
  const Icon = ({
    viewBox = "0 0 24 24",
    width = 24,
    height = 24,
    color = "currentColor",
    fill = "",
    strokeWidth = 1,
  }) => {
    return (
      <svg
        viewBox={viewBox}
        width={width}
        height={height}
        strokeWidth={strokeWidth}
        fill={fill ? fill : "none"}
        stroke={fill === "none" ? color : "currentColor"}
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-hidden="true"
      />
    );
  };

  return Icon;
};

export default withIcon;
