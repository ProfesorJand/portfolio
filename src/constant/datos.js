import fs from 'fs';

export const data = {
  usuarioGithub: 'ProfesorJand',
};

export const url = {
  repositorios: `https://api.github.com/users/${data.usuarioGithub}/repos`,
  organizaciones: `https://api.github.com/users/${data.usuarioGithub}/orgs`,
};

export async function getAllRepos() {
  const response = await fetch(url.repositorios)
    .then((r) => r.json())
    .then((repos) => {
      if (Array.isArray(repos)) {
        fs.writeFileSync(
          'src/constant/repos.json',
          JSON.stringify(repos, null, 2)
        );
      }
      return repos;
    });
}

export async function getAllOrgs() {
  await fetch(url.organizaciones)
    .then((r) => {
      // console.log({
      //   reset: r.headers.get('x-ratelimit-reset'),
      //   limite: r.headers.get('x-ratelimit-limit'),
      //   restantes: r.headers.get('x-ratelimit-remaining'),
      //   usados: r.headers.get('x-ratelimit-used'),
      // });
      return r.json();
    })
    .then((orgs) => {
      //arrays de fetch de URLS
      // console.log(orgs);
      // const urlOrgsRepo = Promise.all(
      //   orgs.map(async (org) => {
      //     console.log(org.repos_url);
      //     org.org_data = await fetch(org.repos_url).then((r) => r.json());
      //     return org;
      //   })
      // );

      // const nuevoArray = urlOrgsRepo.then((r) => r);
      // console.log(await nuevoArray);
      if (Array.isArray(orgs)) {
        fs.writeFileSync(
          'src/constant/orgs.json',
          JSON.stringify(orgs, null, 2)
        );
      }
      return orgs;
    });
}
