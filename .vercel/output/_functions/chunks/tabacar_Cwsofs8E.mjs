const tabacar = new Proxy({"src":"/_astro/tabacar.Dvnrd2Rx.jpeg","width":520,"height":520,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vicus/Projects/HealthAcademy/src/images/team/tabacar.jpeg";
							}
							
							return target[name];
						}
					});

export { tabacar as default };
