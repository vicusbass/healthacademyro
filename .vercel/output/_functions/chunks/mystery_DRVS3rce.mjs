const mystery = new Proxy({"src":"/_astro/mystery.vJjXeQGZ.jpeg","width":186,"height":232,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vicus/Projects/HealthAcademy/src/images/team/mystery.jpeg";
							}
							
							return target[name];
						}
					});

export { mystery as default };
