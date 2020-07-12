import {
  FunctionComponent,
  useCallback,
  useState,
  ChangeEvent,
  FormEvent,
} from 'react';
import { useTranslation } from 'react-i18next';

import { MainHeader } from '../components/MainHeader';
import TelegramSvg from '../assets/svg/telegram.svg';
import SlackSvg from '../assets/svg/slack.svg';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { MainSection } from '../components/MainSection';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getOrgContributorsQuery } from '../queries/getOrgContributors.query';
import { getOrgContributors } from '../queries/types/getOrgContributors';
import { ContributorCard } from '../components/ContributorCard';
import commonConstant from '../constant/common.json';
import { inviteOrgCollaboratorMutation } from '../queries/inviteOrgCollaborator.mutation';
import {
  inviteOrgCollaborator,
  inviteOrgCollaboratorVariables,
} from '../queries/types/inviteOrgCollaborator';

const Home: FunctionComponent<{}> = () => {
  const { t } = useTranslation();
  const [githubUsername, setGithubUsername] = useState('');
  const { data: contributorsData } = useQuery<getOrgContributors>(
    getOrgContributorsQuery,
  );

  const [inviteCollaborator, { loading: invitationLoading }] = useMutation<
    inviteOrgCollaborator,
    inviteOrgCollaboratorVariables
  >(inviteOrgCollaboratorMutation);

  const handleCollaboratorInvitationInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setGithubUsername(e.currentTarget.value);
    },
    [],
  );

  const handleCollaboratorInvitation = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await inviteCollaborator({
          variables: {
            username: githubUsername,
          },
        });

        if (response?.data?.inviteOrgCollaborator?.state === 'active') {
          alert(
            t('{{username}} telah menjadi bagian dari ProbolinggoDev', {
              username: githubUsername,
            }),
          );
        } else {
          alert(t('Invitation telah dikirim, silahkan cek email'));
        }
        setGithubUsername('');
      } catch (e) {
        alert(e?.message);
      }
    },
    [githubUsername],
  );

  return (
    <div>
      <Navbar />
      <MainHeader
        title={t(
          'Membuat <span class="highlighted-text">perubahan</span> dengan teknologi',
        )}
        illustration="https://res.cloudinary.com/dt2mntbmf/image/upload/v1594341497/probdev_vnvkql.png"
        subtitle={
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  `Kami adalah komunitas Engineer, Hacker, Designer yang bermimpi bahwa ketika kami bersatu dan bekerja sama dalam sebuah kontribusi teknologi, suatu saat kota kami akan memiliki ekosistem yang baik bagi para techpreneur & techmaker masa depan. <br /><br />Dampak kami memang belum besar, tapi <span class="highlighted-text">kami percaya segala hal yang telah kami mulai saat ini, pada masanya akan menemukan titik balik dan kami tidak akan menunggu masa itu sembari diam.</span> Bergabung bersama kami!`,
                ),
              }}
            />
          </section>
        }
      >
        <Button
          htmlType="a"
          target="_blank"
          href={commonConstant.SLACK_INVITATION_URL}
          color="coffee"
          prefix={<SlackSvg className="inline-block w-4 h-4 mr-2" />}
        >
          {t('Join Slack')}
        </Button>
        <div className="h-2 md:w-2" />
        <Button
          htmlType="a"
          target="_blank"
          href={commonConstant.TELEGRAM_URL}
          prefix={<TelegramSvg className="inline-block w-4 h-4 mr-2" />}
        >
          {t('Join Telegram')}
        </Button>
      </MainHeader>

      <MainSection>
        <h2
          className="md:text-left text-center text-2xl mb-2"
          dangerouslySetInnerHTML={{
            __html: t(
              'Precious <span class="highlighted-text">Contributors</span>',
            ),
          }}
        />
        <p className="md:text-left text-center mb-10 md:mb-5">
          {t(
            'Terima kasih pada setiap orang - orang ini yang telah meluangkan waktu, tenaga, dan pikiran untuk kontribusi terhadap project - project yang ada di ProbolinggoDev',
          )}
        </p>
        <div className="flex flex-wrap justify-around md:justify-start">
          {contributorsData?.getOrgContributors?.map((contributor) => (
            <ContributorCard key={contributor.id} data={contributor} />
          ))}
        </div>
        <h2 className="mt-5 mb-2">{t('Ingin menjadi contributor?')}</h2>
        <form
          className="w-full max-w-sm"
          onSubmit={handleCollaboratorInvitation}
        >
          <div className="flex items-center bg-white">
            <input
              className="w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              onChange={handleCollaboratorInvitationInputChange}
              value={githubUsername}
              placeholder={t('Username Github')}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"
              type="submit"
              disabled={invitationLoading}
            >
              {invitationLoading ? t('Loading') : t('Kirim Invitation')}
            </button>
          </div>
        </form>
      </MainSection>
    </div>
  );
};

export default Home;
