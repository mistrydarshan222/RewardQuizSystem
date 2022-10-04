-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 04, 2022 at 08:10 AM
-- Server version: 5.7.33
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abhishek`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(22, 'Food Brand', '1663738988.png', '2022-09-21 00:13:08', '2022-09-21 00:13:08'),
(23, 'Fun Science', '1663738999.png', '2022-09-21 00:13:19', '2022-09-21 00:13:19'),
(24, 'Monuments', '1663739010.png', '2022-09-21 00:13:30', '2022-09-21 00:13:30'),
(25, 'Test Your Knowledge', '1663739025.png', '2022-09-21 00:13:45', '2022-09-21 00:13:45'),
(26, 'Vocabulary', '1663739051.png', '2022-09-21 00:14:11', '2022-09-21 00:14:11'),
(27, 'Check data', '1663739974.png', '2022-09-21 00:29:34', '2022-09-21 00:29:34'),
(28, 'XAS', '1663917697.jpg', '2022-09-23 01:51:37', '2022-09-23 01:51:37');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_09_19_060021_create_categories_table', 1),
(6, '2022_09_20_044346_create_quiz_table', 2),
(7, '2022_09_20_044653_create_quiz_table', 3),
(8, '2022_09_20_083035_create_ques_table', 4),
(9, '2022_09_22_050435_create_players_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `playedquiz`
--

CREATE TABLE `playedquiz` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `player_id` bigint(20) UNSIGNED NOT NULL,
  `quiz_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `playedquiz`
--

INSERT INTO `playedquiz` (`id`, `player_id`, `quiz_id`, `created_at`, `updated_at`) VALUES
(2, 1, 16, '2022-09-30 01:25:55', '2022-09-30 01:25:55'),
(25, 1, 16, '2022-09-30 01:38:46', '2022-09-30 01:38:46');

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_pic` text COLLATE utf8mb4_unicode_ci,
  `phone_number` text COLLATE utf8mb4_unicode_ci,
  `coins` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `email`, `profile_pic`, `phone_number`, `coins`, `created_at`, `updated_at`) VALUES
(1, 'Gita Patel', 'gitap4465@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu1JOh76lmnwRh548POUq9wM5xIZbWWkOMgISNkM=s96-c', NULL, '500', '2022-09-23 05:36:35', '2022-09-23 05:36:35'),
(15, 'may patel', 'maylast7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu1qpOqltq__3VE8aWvEZwpC5Z2fF0SwC7xNvYAA=s96-c', NULL, '0', '2022-09-23 05:49:25', '2022-09-23 05:49:25'),
(16, 'Sahil Jani', 'sahiljani123456@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu_4fi-Zfw5DXxcdkWjc-x4EUJE0bTWTV_5QhvWIXUk=s96-c', NULL, '8050', '2022-09-30 01:40:40', '2022-09-30 01:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `ques`
--

CREATE TABLE `ques` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `que` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `option1` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `option2` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `option3` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `option4` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `correct` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quiz_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ques`
--

INSERT INTO `ques` (`id`, `que`, `option1`, `option2`, `option3`, `option4`, `correct`, `quiz_id`, `created_at`, `updated_at`) VALUES
(31, 'What will be the masculine form of the noun \'vixen\'?', 'Ant', 'Elephant', 'Fox', 'Lamb', 'C', 'Noun Pronoun', '2022-09-21 00:16:07', '2022-09-21 00:16:07'),
(32, 'Pick the odd one out', 'Venus', 'Earth', 'Neptune', 'Marsh', 'B', 'Noun Pronoun', '2022-09-21 00:16:54', '2022-09-21 00:16:54'),
(33, 'Which of the following is not a noun?', 'Quias', 'facing', 'Train', 'Horse', 'C', 'Noun Pronoun', '2022-09-21 00:17:12', '2022-09-21 00:17:12'),
(34, 'Identify the odd one out', 'Walk', 'Listen', 'jUmp', 'Swim', 'B', 'Noun Pronoun', '2022-09-21 00:17:31', '2022-09-21 00:17:31'),
(35, 'Who founded the Indian National Congress?', 'A.O Hume', 'Annie Besant', 'Gandhi', 'Rahul', 'B', 'History Maker', '2022-09-21 00:19:00', '2022-09-21 00:19:00'),
(36, 'Yogi Adityanath is serving as a Chief Minister of which state?', 'Goa', 'Gujrat', 'MP', 'UP', 'A', 'History Maker', '2022-09-21 00:19:14', '2022-09-21 00:19:14'),
(37, 'Who among these have never been the Prime minister of India?', 'Bajpayee', 'Mota BHai', 'Indira', 'Modi', 'A', 'History Maker', '2022-09-21 00:19:39', '2022-09-21 00:19:39'),
(38, 'Who is known as the \'Missile Man\' of India?', 'Adbul', 'Kalam', 'Manmohan', 'Amit Shah', 'A', 'History Maker', '2022-09-21 00:20:01', '2022-09-21 00:20:01'),
(39, 'Which of the following planets have no moons?', 'Earth', 'march', 'Venus', 'all', 'B', 'Fun Science  |  Space Exploration', '2022-09-21 00:21:36', '2022-09-21 00:21:36'),
(40, 'How many planets are there between the Earth and the Sun?', '1', '2', '5', '8', 'A', 'Fun Science  |  Space Exploration', '2022-09-21 00:21:49', '2022-09-21 00:21:49'),
(41, 'How many U.S astronauts have walked on the Moon?', '0', '12', '58', '32', 'A', 'Fun Science  |  Space Exploration', '2022-09-21 00:21:59', '2022-09-21 00:21:59'),
(42, 'Which planet lies in the outermost orbit of the solar system?', 'Saturn', 'mars', 'earth', 'all', 'A', 'Fun Science  |  Space Exploration', '2022-09-21 00:22:18', '2022-09-21 00:22:18');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction` text COLLATE utf8mb4_unicode_ci,
  `coins` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `charges` int(11) NOT NULL DEFAULT '100',
  `category` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `name`, `image`, `instruction`, `coins`, `charges`, `category`, `created_at`, `updated_at`) VALUES
(16, 'sad', '1663739127.jpg', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline.\r\n* Quiz1', '1500', 1000, 'Food Brand', '2022-09-21 00:15:27', '2022-09-23 01:15:12'),
(17, 'History Maker', '1663739313.png', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline.\r\n*** History Maker**', '1500', 1000, 'Fun Science', '2022-09-21 00:18:33', '2022-09-21 00:18:33'),
(18, 'Fun Science  |  Space Exploration', '1663739471.jpg', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline\r\n**Fun Science  |  Space-Exploration**', '1000', 100, 'Fun Science', '2022-09-21 00:21:11', '2022-09-21 00:21:11'),
(19, 'DASASASD', '1663914079.png', 'SADASDASDADASD', '3333', 10222, 'Fun Science', '2022-09-23 00:51:19', '2022-09-23 00:51:19'),
(20, 'asd asdas dasd', '1663914168.png', 'asd sadsad asdsa das d', '22', 10, 'Monuments', '2022-09-23 00:52:48', '2022-09-23 00:52:48'),
(21, 'asd as dasd asdas', '1663914223.png', 'dsa dsa dsa sadsaassa', '222', 10, 'Food Brand', '2022-09-23 00:53:43', '2022-09-23 00:53:43'),
(22, 'asdasd @@adsada', '1663914235.png', 'asdasasdasasd asd asadadsaasd', '22', 10, 'Food Brand', '2022-09-23 00:53:55', '2022-09-23 00:53:55');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci,
  `favicon` text COLLATE utf8mb4_unicode_ci,
  `title` text COLLATE utf8mb4_unicode_ci,
  `headerScript` text COLLATE utf8mb4_unicode_ci,
  `footerScript` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `logo`, `favicon`, `title`, `headerScript`, `footerScript`, `created_at`, `updated_at`) VALUES
(1, '1664176913.png', '1664115431.jpg', 'sdfas', NULL, 'dasdasdasdsaas', NULL, '2022-09-25 20:21:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Goyette, Schuster and Jacobson', 'n.i.ckb.ha.is.mith@gmail.com', NULL, '$2y$10$94tSs8nCjY8HLpbKjeZgkOXAIUEWhdpMAQfDtiMD9csUuU3lwyfri', NULL, '2022-09-29 23:21:43', '2022-09-29 23:21:43'),
(2, 'Ratke - Morar', 'n.ick.bh.a.i.s.mi.th@gmail.com', NULL, '$2y$10$E8t69DE3uw1i5Cxo4F2wSeQqt6rjk9o4UwljY08qMnjtbmvPEKNeC', NULL, '2022-09-29 23:22:04', '2022-09-29 23:22:04'),
(3, 'Hagenes Inc', 'ni.c.k.b.h.aism.it.h@gmail.com', NULL, '$2y$10$fHdCxKgfo2IlW24mAIKHVengF/l7Gw2r867R.6BsCDOlvMOxf7fPy', NULL, '2022-09-29 23:24:18', '2022-09-29 23:24:18'),
(4, 'Orn, Kutch and Conn', 'nic.kb.ha.is.mi.th@gmail.com', NULL, '$2y$10$7treMCLKUw8Vtotjz.oOB.m4SXmKZo8R3IGjWJtOVlJvQdEwiGrdi', NULL, '2022-09-29 23:25:05', '2022-09-29 23:25:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `playedquiz`
--
ALTER TABLE `playedquiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playedquiz_quiz_id_foreign` (`quiz_id`),
  ADD KEY `playedquiz_player_id_foreign` (`player_id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `ques`
--
ALTER TABLE `ques`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `playedquiz`
--
ALTER TABLE `playedquiz`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `playedquiz`
--
ALTER TABLE `playedquiz`
  ADD CONSTRAINT `playedquiz_player_id_foreign` FOREIGN KEY (`player_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `playedquiz_quiz_id_foreign` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
