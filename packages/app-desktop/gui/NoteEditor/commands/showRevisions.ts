import { CommandRuntime, CommandDeclaration } from '@joplinapp/lib/services/CommandService';

export const declaration:CommandDeclaration = {
	name: 'showRevisions',
};

export const runtime = (comp:any):CommandRuntime => {
	return {
		execute: async () => {
			comp.setShowRevisions(true);
		},
	};
};
