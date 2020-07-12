import { FunctionComponent } from 'react';
import { getOrgContributors_getOrgContributors } from '../queries/types/getOrgContributors';

interface Props {
  data: getOrgContributors_getOrgContributors;
}

export const ContributorCard: FunctionComponent<Props> = (props) => {
  const { data } = props;

  return (
    <div className="w-24 my-2 text-center md:text-left overflow-hidden mx-1 md:mr-2">
      <a href={data.htmlUrl} target="_blank" rel="nofollow">
        <img className="rounded" src={data.avatarUrl} alt={data.name} />
        <span>{data.name}</span>
      </a>
    </div>
  );
};
