function IconComponent({name,src}) {

    return(
        <figure>
        <img src={src} alt={name} />
        <figcaption>{name}</figcaption>
        </figure>

    )

}

export default IconComponent;