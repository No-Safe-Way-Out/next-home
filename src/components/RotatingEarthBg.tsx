'use client'

import {Box} from "@mui/material";
import Globe, {GlobeMethods} from "react-globe.gl";
import {useEffect, useRef, useState} from "react";
import {scaleSequentialSqrt} from "d3-scale";
import {interpolateYlOrRd} from "d3-scale-chromatic";
import theme from "@/app/theme";
import {Color, Material, MeshPhysicalMaterial} from "three";

const m = new MeshPhysicalMaterial();
m.color = new Color(theme.palette.primary.light);
m.transmission = 0.75;
m.opacity = 0.75;
m.metalness = 0;
m.roughness = 0.3;
m.ior = 1.2;
m.thickness = 3;
m.specularIntensity = 0.6;
m.specularColor = new Color(theme.palette.primary.main);
m.envMapIntensity = 0.5;
m.transparent = true;

function World() {
    const [countries, setCountries] = useState({features: []});
    const [material, _setMaterial] = useState<Material>(m);
    const globeRef = useRef<GlobeMethods>(undefined);

    useEffect(() => {
        fetch('/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.pointOfView({ lat: 27.5 }, 0);

            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 1;
            globeRef.current.controls().enableRotate = true;
        }
    }, []);

    const colorScale = scaleSequentialSqrt(interpolateYlOrRd);

    function getVal(d: Object) {
        // @ts-ignore
        return d.properties.GDP_MD / Math.max(1e5, d.properties.POP_EST) * 2;
    }

    return (
        <Globe
            ref={globeRef}
            globeMaterial={material}
            backgroundColor={theme.palette.background.default}
            lineHoverPrecision={0}
            polygonsData={countries.features}
            polygonAltitude={0.03}
            polygonCapColor={d => colorScale(getVal(d))}
            polygonStrokeColor={() => theme.palette.primary.dark}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
            pathResolution={2}
        />
    );
}

export default function RotatingEarthBg() {
    return (
        <Box position="absolute" top={0} left="25%" zIndex={-1}>
            <World/>
        </Box>
    );
}
