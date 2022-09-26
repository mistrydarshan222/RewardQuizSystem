-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2022 at 09:47 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
(28, 'English Grammer', '1664083040.jpg', '2022-09-24 23:47:20', '2022-09-24 23:47:20'),
(29, 'Sports', '1664083090.jpg', '2022-09-24 23:48:10', '2022-09-24 23:48:10');

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
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
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
(9, '2022_09_22_050435_create_players_table', 5),
(10, '2022_09_25_123846_create_settings_table', 6);

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
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `profile_pic` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coins` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `name`, `email`, `profile_pic`, `phone_number`, `coins`, `created_at`, `updated_at`) VALUES
(32, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:14:02', '2022-09-22 02:14:02'),
(33, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:14:42', '2022-09-22 02:14:42'),
(34, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:17:12', '2022-09-22 02:17:12'),
(35, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '1', '2022-09-22 02:17:35', '2022-09-22 02:17:35'),
(36, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '1', '2022-09-22 02:17:41', '2022-09-22 02:17:41'),
(37, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:17:55', '2022-09-22 02:17:55'),
(38, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:18:02', '2022-09-22 02:18:02'),
(39, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:18:17', '2022-09-22 02:18:17'),
(40, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, NULL, '2022-09-22 02:18:20', '2022-09-22 02:18:20'),
(41, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:18:48', '2022-09-22 02:18:48'),
(42, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:21:18', '2022-09-22 02:21:18'),
(43, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:22:14', '2022-09-22 02:22:14'),
(44, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:22:16', '2022-09-22 02:22:16'),
(45, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:22:28', '2022-09-22 02:22:28'),
(46, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:22:51', '2022-09-22 02:22:51'),
(47, 'darshu jani', 'darshujani7519@gmail.com', 'https://lh3.googleusercontent.com/a/ALm5wu2L6MNYLPOm_Dx3sXsvkArxrfbt4iq2tvfidomV=s96-c', NULL, '0', '2022-09-22 02:23:23', '2022-09-22 02:23:23'),
(48, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '25500', '2022-09-25 00:33:08', '2022-09-25 00:33:08'),
(49, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 01:38:09', '2022-09-25 01:38:09'),
(50, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 01:50:17', '2022-09-25 01:50:17'),
(51, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 01:58:13', '2022-09-25 01:58:13'),
(52, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:08:10', '2022-09-25 02:08:10'),
(53, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:08:29', '2022-09-25 02:08:29'),
(54, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:08:38', '2022-09-25 02:08:38'),
(55, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:09:06', '2022-09-25 02:09:06'),
(56, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:09:19', '2022-09-25 02:09:19'),
(57, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:09:44', '2022-09-25 02:09:44'),
(58, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:10:08', '2022-09-25 02:10:08'),
(59, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:12:26', '2022-09-25 02:12:26'),
(60, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:13:06', '2022-09-25 02:13:06'),
(61, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:13:28', '2022-09-25 02:13:28'),
(62, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:13:43', '2022-09-25 02:13:43'),
(63, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:13:43', '2022-09-25 02:13:43'),
(64, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:14:38', '2022-09-25 02:14:38'),
(65, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:14:41', '2022-09-25 02:14:41'),
(66, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:14:42', '2022-09-25 02:14:42'),
(67, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:15:06', '2022-09-25 02:15:06'),
(68, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:15:14', '2022-09-25 02:15:14'),
(69, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:15:49', '2022-09-25 02:15:49'),
(70, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:15:56', '2022-09-25 02:15:56'),
(71, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:12', '2022-09-25 02:16:12'),
(72, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:13', '2022-09-25 02:16:13'),
(73, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:28', '2022-09-25 02:16:28'),
(74, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:31', '2022-09-25 02:16:31'),
(75, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:37', '2022-09-25 02:16:37'),
(76, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:16:48', '2022-09-25 02:16:48'),
(77, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:18:06', '2022-09-25 02:18:06'),
(78, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:18:07', '2022-09-25 02:18:07'),
(79, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:18:38', '2022-09-25 02:18:38'),
(80, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:18:56', '2022-09-25 02:18:56'),
(81, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:19:02', '2022-09-25 02:19:02'),
(82, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:19:15', '2022-09-25 02:19:15'),
(83, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:19:59', '2022-09-25 02:19:59'),
(84, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:20:06', '2022-09-25 02:20:06'),
(85, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:23:39', '2022-09-25 02:23:39'),
(86, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:23:57', '2022-09-25 02:23:57'),
(87, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:27:13', '2022-09-25 02:27:13'),
(88, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:27:38', '2022-09-25 02:27:38'),
(89, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:27:45', '2022-09-25 02:27:45'),
(90, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:30:13', '2022-09-25 02:30:13'),
(91, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:30:42', '2022-09-25 02:30:42'),
(92, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:31:31', '2022-09-25 02:31:31'),
(93, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:32', '2022-09-25 02:32:32'),
(94, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:37', '2022-09-25 02:32:37'),
(95, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:42', '2022-09-25 02:32:42'),
(96, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:42', '2022-09-25 02:32:42'),
(97, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:47', '2022-09-25 02:32:47'),
(98, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:32:56', '2022-09-25 02:32:56'),
(99, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:33:10', '2022-09-25 02:33:10'),
(100, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:37:47', '2022-09-25 02:37:47'),
(101, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:43:15', '2022-09-25 02:43:15'),
(102, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:45:37', '2022-09-25 02:45:37'),
(103, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:56:16', '2022-09-25 02:56:16'),
(104, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:56:56', '2022-09-25 02:56:56'),
(105, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 02:58:57', '2022-09-25 02:58:57'),
(106, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 03:02:08', '2022-09-25 03:02:08'),
(107, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 03:04:53', '2022-09-25 03:04:53'),
(108, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '0', '2022-09-25 03:05:21', '2022-09-25 03:05:21'),
(109, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 03:05:48', '2022-09-25 03:05:48'),
(110, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '-800', '2022-09-25 04:09:32', '2022-09-25 04:09:32'),
(111, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '400', '2022-09-25 05:42:10', '2022-09-25 05:42:10'),
(112, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 05:50:46', '2022-09-25 05:50:46'),
(113, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 05:56:20', '2022-09-25 05:56:20'),
(114, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 05:58:54', '2022-09-25 05:58:54'),
(115, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 05:59:57', '2022-09-25 05:59:57'),
(116, 'Darshan Mistry', 'mistrydarshan222@gmail.com', 'https://lh3.googleusercontent.com/a-/ACNPEu859INvu5CsSFbAikY2dnuIKOyydkECh2OkGUKqVV8=s96-c', NULL, '100', '2022-09-25 06:37:26', '2022-09-25 06:37:26');

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
(42, 'Which planet lies in the outermost orbit of the solar system?', 'Saturn', 'mars', 'earth', 'all', 'A', 'Fun Science  |  Space Exploration', '2022-09-21 00:22:18', '2022-09-21 00:22:18'),
(43, 'Who was the first and only batsman to hit six sixes in an over in the world cup?', 'Yuvraj Singh', 'MS', 'Virat', 'Sachin', 'A', 'Football', '2022-09-24 23:50:18', '2022-09-24 23:50:18'),
(44, 'Who was the first and only batsman to hit six sixes in an over in the world cup?', 'Yuvraj Singh', 'MS', 'Virat', 'Sachin', 'A', 'Football', '2022-09-24 23:50:19', '2022-09-24 23:50:19'),
(45, 'Who was the winner of the first T20 world cup?', 'India', 'WI', 'USA', 'England', 'A', 'Football', '2022-09-24 23:50:37', '2022-09-24 23:50:37'),
(46, 'Which batsman scored the fastest fifty in a T20 world cup?', 'Yuvraaj', 'Ms', 'Rohit', 'Raina', 'A', 'Football', '2022-09-24 23:50:55', '2022-09-24 23:50:55'),
(47, 'Who was the first batsman to score a century in the T20 world cup?', 'Matthew Hayden', 'Chris', 'Sachin', 'Suresh', 'A', 'Football', '2022-09-24 23:51:15', '2022-09-24 23:51:15'),
(48, 'Where was the T20 world cup held in 2007?', 'Africa', 'canada', 'UAE', 'India', 'A', 'Football', '2022-09-24 23:51:41', '2022-09-24 23:51:41');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `instruction` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coins` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `charges` int(11) NOT NULL DEFAULT 100,
  `category` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`id`, `name`, `image`, `instruction`, `coins`, `charges`, `category`, `created_at`, `updated_at`) VALUES
(16, 'Noun Pronoun', '1663739127.jpg', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline.\r\n* Quiz1', '1500', 1000, 'Food Brand', '2022-09-21 00:15:27', '2022-09-21 00:15:27'),
(17, 'History Maker', '1663739313.png', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline.\r\n*** History Maker**', '1500', 1000, 'Fun Science', '2022-09-21 00:18:33', '2022-09-21 00:18:33'),
(18, 'Fun Science  |  Space Exploration', '1663739471.jpg', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline\r\n**Fun Science  |  Space-Exploration**', '1000', 100, 'Fun Science', '2022-09-21 00:21:11', '2022-09-21 00:21:11'),
(19, 'Football', '1664083169.png', '* You\'ve got 90 - 150 seconds to answer all questions\r\n* Answer as many questions as you can\r\n* For Every Correct answer you will get +50 points and will loose -25 points on every Incorrect answer\r\n* You can take help by using the lifelines present in the contest.\r\n* Lifelines can be used for free or by using a given amount of coins for each lifeline.', '1000', 100, 'Sports', '2022-09-24 23:49:29', '2022-09-24 23:49:29');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favicon` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `headerScript` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footerScript` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `logo`, `favicon`, `title`, `headerScript`, `footerScript`, `created_at`, `updated_at`) VALUES
(1, '1664176913.png', '1664115431.jpg', 'sdfas', NULL, 'dasdasdasdsaas', NULL, '2022-09-26 01:51:53');

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
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ques`
--
ALTER TABLE `ques`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`) USING HASH;

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `ques`
--
ALTER TABLE `ques`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
